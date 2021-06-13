import React, { PureComponent } from 'react';
import MultiSelect from 'react-multi-select-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Select } from '@material-ui/core';
export class PopEntries extends PureComponent {
  constructor() {
    super();
    this.state = {
      options: [
        { label: 'Grapes 🍇', value: 'grapes' },
        { label: 'Mango 🥭', value: 'mango' },
        { label: 'Strawberry 🍓', value: 'strawberry', disabled: true },
        { label: 'Watermelon 🍉', value: 'watermelon' },
        { label: 'Pear 🍐', value: 'pear' },
        { label: 'Apple 🍎', value: 'apple' },
        { label: 'Tangerine 🍊', value: 'tangerine' },
        { label: 'Pineapple 🍍', value: 'pineapple' },
        { label: 'Peach 🍑', value: 'peach' },
      ],
      select: [],
    };
  }
  render() {
    return (
      <div className='popup-entry'>
        <div className='client-section'>
          <div className='legal-entity'>
            <div className='text'>Client</div>
            <div className='data-selection'>
              <select value='legal Entity' placeholder='Legal Entity'>
                <option selected='selected'>Legal Entity</option>
                <option value='ab'>ab</option>
                <option value='ab'>ab</option>
              </select>
            </div>
          </div>
          <div className='books'>
            <div className='text'>Books</div>
            <div className='data-selection'>
              <MultiSelect
                options={this.state.options}
                value={this.state.select}
                onChange={(e) => {
                  this.setState({ select: [...this.state.select, ...e] });
                }}
                labelledBy='Books..'
              />
            </div>
          </div>
          <div className='instrument'>
            <div className='text'>Instrument</div>
            <div className='data-selection'>
              <MultiSelect
                options={this.state.options}
                value={this.state.select}
                onChange={(e) => {
                  this.setState({ select: [...this.state.select, ...e] });
                }}
                labelledBy='Instrument..'
              />
            </div>
          </div>
        </div>
        <div className='internal-section'>
          <div className='legal-entity'>
            <div className='text'>Insternal</div>
            <div className='data-selection'>
              <select value='legal Entity' placeholder='Legal Entity'>
                <option selected='selected'>Legal Entity</option>
                <option value='ab'>ab</option>
                <option value='ab'>ab</option>
              </select>
            </div>
          </div>
          <div className='books'>
            <div className='text'>Books</div>
            <div className='data-selection'>
              <MultiSelect
                options={this.state.options}
                value={this.state.select}
                onChange={(e) => {
                  this.setState({ select: [...this.state.select, ...e] });
                }}
                labelledBy='Books..'
              />
            </div>
          </div>
          <div className='instrument'>
            <div className='text'>Instrument</div>
            <div className='data-selection'>
              <MultiSelect
                options={this.state.options}
                value={this.state.select}
                onChange={(e) => {
                  this.setState({ select: [...this.state.select, ...e] });
                }}
                labelledBy='Instrument..'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopEntries;
