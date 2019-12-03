import React from 'react';
import LayoutContent from '@iso/components/utility/layoutContent';
import Steps from '@iso/components/uielements/steps';
import message from '@iso/components/uielements/message';
import ContentHolder from '@iso/components/utility/contentHolder';
import Button from '@iso/components/uielements/button';
import PageHeader from '@iso/components/utility/pageHeader';
import Location from './Location';
import Price from './Price';
import Done from './Done';

const Step = Steps.Step;
const steps = [
  {
    title: 'Location',
    content: (
      <div className="isoExampleWrapper">
        <Location />
      </div>
    ),
  },
  {
    title: 'Price',
    content: (
      <div className="isoExampleWrapper">
        <Price />
      </div>
    ),
  },
  {
    title: 'Done',
    content: (
      <div className="isoExampleWrapper">
        <Done />
      </div>
    ),
  },
];

export default function() {
  const [current, setCurrent] = React.useState(0);

  function next() {
    setCurrent(current => current + 1);
  }
  function prev() {
    setCurrent(current => current - 1);
  }
  return (
    <LayoutContent>
      <PageHeader>Stepper Form</PageHeader>
      <ContentHolder>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div s="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
        </div>
      </ContentHolder>
    </LayoutContent>
  );
}
