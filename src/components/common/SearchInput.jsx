import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class InpuField extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div class='search-container'>
        <div className='search-icon'>
          <FontAwesomeIcon icon={faSearch} size='xs' />
        </div>
        <div className='search-input'>
          <input
            type='text'
            class='search-bar'
            placeholder='Search..'
            value={value || ''}
            onChange={(e) => {
              onChange(e.target.value || undefined);
              // setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
          />
        </div>
      </div>
    );
  }
}
