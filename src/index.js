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
import { OptionDivider } from './OptionDivider.jsx'
import { OptionGroup } from './OptionGroup.jsx'
import { MultiSelect } from './MultiSelect.jsx'
import { Fab } from './Fab.jsx'
import { Icon } from './Icon.jsx'
import { IconToggle } from './IconToggle.jsx'
import { ProgressBar } from './ProgressBar.jsx'

export {
    Button,
    Checkbox,
    Dialog,
    Radio,
    TextField,
    TextArea,
    Select,
    Option,
    OptionDivider,
    OptionGroup,
    MultiSelect,
    Fab,
    Icon,
    IconToggle,
    ProgressBar
}

window.onload = () => {
    autoInit();
}
