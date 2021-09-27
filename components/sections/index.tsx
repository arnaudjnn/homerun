import Hero from 'components/sections/hero';

const sectionsIndex = {
  'hero': Hero
}

const Sections = ({ sections }) => {
  return sections.map(section => {
    const Component = sectionsIndex[section.component]

    return <Component {...section} />
  })
}

export default Sections