import CheckboxToggler from './CheckboxToggler'
import Wowhead from './Wowhead'

const Checkbox = ({
  id = '',
  text = false,
  spellId = '',
  name = '',
  defaultCheck = false,
  radio = '',
  children,
}) => {
  const child =
    text || spellId == '' ? name : <Wowhead type="spell" id={spellId} name={name} disabled />

  return (
    <div style={{ userSelect: 'none' }} className="x mb-2 mt-2 min-h-[16px] whitespace-nowrap">
      <CheckboxToggler id={id === '' ? spellId : id} defaultCheck={defaultCheck} radio={radio}>
        {child}
      </CheckboxToggler>
    </div>
  )
}

export default Checkbox
