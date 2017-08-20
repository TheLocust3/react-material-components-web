import React from 'react';
import ReactDOM from 'react-dom';
import { autoInit } from 'material-components-web';

import { Button } from './Button.jsx'
import { Checkbox } from './Checkbox.jsx'
import { Dialog } from './Dialog.jsx'
import { Radio } from './Radio.jsx'
import { TextField } from './TextField.jsx'
import { TextArea } from './TextArea.jsx'
import { Select } from './Select.jsx'
import { Option } from './Option.jsx'

export {
    Button,
    Checkbox,
    Dialog,
    Radio,
    TextField,
    TextArea,
    Select,
    Option
}

window.onload = () => {
    autoInit();
}
