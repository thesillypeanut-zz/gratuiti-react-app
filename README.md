# Gratuiti

## Getting Started
```bash
# Clone this repository and cd into it:
git clone https://github.com/thesillypeanut/gratuiti-react-app.git
cd gratuiti-react-app/

# Install dependencies:
npm install

# Start the server:
npm start
```

## Developer Guide

### State

Application state is maintained as a single, immutable, global state graph. See
[statezero documentation](https://github.com/andornaut/statezero/blob/master/README.md) for more information.

Whenever the global state changes via [actions](src/actions), each component's `filterState()` method is invoked with a
frozen copy of the new state and then its `render()` method is invoked.

### Naming Conventions

CSS class names follow the [BEM methodology](http://getbem.com/).
