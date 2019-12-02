import React from 'react';
import styled from 'styled-components';

export default ({type, name, value, placeholder}) => (
    <input type={type} name={name} value={value} placeholder={placeholder} />
);