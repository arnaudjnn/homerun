import Hero from 'components/sections/hero';
import FeatureOne from 'components/sections/feature-one';

const sectionsIndex = {
  'hero': Hero,
  'featureOne': FeatureOne
}

const Sections = ({ sections }) => {
  return sections.map(section => {
    const Component = sectionsIndex[section.component]

    return <Component {...section} />
  })
}

export default Sections