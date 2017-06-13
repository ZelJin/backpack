import React from 'react';
import renderer from 'react-test-renderer';
import BpkPanel from './BpkPanel';

describe('BpkPanel', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <BpkPanel>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </BpkPanel>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with padded attribute', () => {
    const tree = renderer.create(
      <BpkPanel padded={false}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </BpkPanel>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with fullWidth attribute', () => {
    const tree = renderer.create(
      <BpkPanel fullWidth>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </BpkPanel>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with className attribute', () => {
    const tree = renderer.create(
      <BpkPanel className="custom-class">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </BpkPanel>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});