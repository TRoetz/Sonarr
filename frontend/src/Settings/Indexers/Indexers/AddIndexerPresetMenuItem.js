import React, { Component, PropTypes } from 'react';
import MenuItem from 'Components/Menu/MenuItem';

class AddIndexerPresetMenuItem extends Component {

  //
  // Listeners

  onPress = () => {
    const {
      name,
      implementation
    } = this.props;

    this.props.onPress({
      name,
      implementation
    });
  }

  //
  // Render

  render() {
    const {
      name,
      implementation,
      ...otherProps
    } = this.props;

    return (
      <MenuItem
        {...otherProps}
        onPress={this.onPress}
      >
        {name}
      </MenuItem>
    );
  }
}

AddIndexerPresetMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  implementation: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default AddIndexerPresetMenuItem;
