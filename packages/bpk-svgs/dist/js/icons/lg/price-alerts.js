import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M19 18.2c.8 0 1.3-.9.8-1.6L17.9 15l-.5-5.9c-.2-2.7-1.6-4.4-3.9-5 .1-.2.1-.3.1-.5 0-.9-.7-1.6-1.6-1.6s-1.6.7-1.6 1.6c0 .2 0 .4.1.5-2.3.6-3.6 2.3-3.9 5L6.1 15l-1.9 1.7a1 1 0 0 0 .8 1.6h14zM10 20c0 1.1.9 2 2 2s2-.9 2-2" /><path d="M9.2 20c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H9.2z" /></svg>;
  }

}