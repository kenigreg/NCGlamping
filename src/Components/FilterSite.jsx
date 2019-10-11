import React, { Component } from 'react';

class FilterSite extends Component {
  state = {
    val: ''
  };
  render() {
    const { searchOptions, onChange } = this.props;
    return (
      <div>
        <select onChange={onChange} className="form-control mb-2 mr-sm-2">
          <option value="">Find A Campsite</option>
          {searchOptions.map((searchOption, index) => {
            return (
              <option value={searchOption} key={searchOption}>
                {searchOption}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default FilterSite;
