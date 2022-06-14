import NoSection from '../sections/NoSection/NoSection';

const getSectionComponent = (name: string): ((props: any) => JSX.Element) => {
    const sectionName = name?.split('_').pop() || '';
    switch (sectionName) {
        default:
            return NoSection;
    }
};

export default getSectionComponent;
