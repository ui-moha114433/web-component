import { Accordion } from './Accordion';
import './accordion.css';

export default {
    title: 'Example/Accordion',
    component: Accordion,
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
    },
};

export const Default = () => `<my-accordion aria-label="heading" class="default" summaryText="Heading-One" detailsText="1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
</my-accordion>
<my-accordion aria-label="heading-two" summaryText="Heading-Two" detailsText="2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
</my-accordion>
<my-accordion aria-label="heading-three" summaryText="Heading-Three" detailsText="3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
</my-accordion>
`

const Template = ({ label, ...args }) => {
    return `<my-accordion variant="primary" summaryText="Heading" detailsText="1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
    </my-accordion>`;
    // return Accordion({ label, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    class: 'Primary',
};
