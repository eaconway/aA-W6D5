import React from 'react';

class Tabs extends React.Component {
  constructor (props){
    super(props);
    this.state = { selected:0};
    // debugger
  }

  render() {
    // debugger
    let tab = this.props.tabs[this.state.selected];

    return (
      <div>
        <h1>Tabs</h1>
        <div>
          <Headers
            selectedTab={this.state.selected}
            onTabChosen={this.fn}
            tabs={this.props.tabs}
            >
          </Headers>
          <div class="tab-content">
            <article>
              {tab.content}
            </article>
          </div>

        </div>
      </div>
    );
  }
}

class Headers extends React.Component {
}

module.exports = Tabs;
