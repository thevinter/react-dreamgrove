export default function Spell({ id, name }) {
  return (
    <>
      <a href={`https://www.wowhead.com/spell=${id}`} className="inline">
        {name}
      </a>{' '}
    </>
  )
}
