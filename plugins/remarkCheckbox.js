import { visit } from 'unist-util-visit'

export default function remarkCheckbox() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      const value = node.value
      const regex = /\?(\d+\|)?(.*?)\?/g
      const matches = [...value.matchAll(regex)]

      if (matches.length) {
        const newNodes = []
        let lastIndex = 0

        matches.forEach((match) => {
          const start = match.index
          const end = start + match[0].length
          const [fullMatch, id, spellName] = match

          if (lastIndex < start) {
            newNodes.push({
              type: 'text',
              value: value.slice(lastIndex, start),
            })
          }

          const spellAttributes = []
          if (id) {
            spellAttributes.push({
              type: 'mdxJsxAttribute',
              name: 'id',
              value: id.slice(0, -1), // remove the trailing '|'
            })
          }
          spellAttributes.push({
            type: 'mdxJsxAttribute',
            name: 'name',
            value: spellName,
          })
          spellAttributes.push({
            type: 'mdxJsxAttribute',
            name: 'type',
            value: 'spell',
          })
          const checkboxAttributes = []
          if (id) {
            checkboxAttributes.push({
              type: 'mdxJsxAttribute',
              name: 'id',
              value: id.slice(0, -1), // remove the trailing '|'
            })
          }

          const spellNode = {
            type: 'mdxJsxFlowElement',
            name: 'Wowhead',
            attributes: spellAttributes,
            children: [],
          }

          const checkboxNode = {
            type: 'mdxJsxFlowElement',
            name: 'Checkbox',
            attributes: checkboxAttributes,
            children: [spellNode],
          }

          newNodes.push(checkboxNode)
          lastIndex = end
        })

        if (lastIndex < value.length) {
          newNodes.push({
            type: 'text',
            value: value.slice(lastIndex),
          })
        }

        parent.children.splice(index, 1, ...newNodes)
      }
    })
  }
}
