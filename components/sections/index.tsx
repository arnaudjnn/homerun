import Hero from 'components/sections/hero';
import FeatureOne from 'components/sections/feature-one';
import FeatureTwo from 'components/sections/feature-two';
import GridOne from 'components/sections/grid-one';

const sectionsIndex = {
  'hero': Hero,
  'featureOne': FeatureOne,
  'featureTwo': FeatureTwo,
  'gridOne': GridOne
}

const Sections = ({ sections }) => {
  return sections.map(section => {
    const Component = sectionsIndex[section.component]

    return <Component {...section} />
  })
}

export default Sections