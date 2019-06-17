# Product configuration
Second project by amsci

## Description
This is a simple 3D product configurator for ACME ecommerce platform. It allows the user to customise an alarm clock and add it to the cart. The configurator offers a selection of materials for the case, the bells, the face and the hands of the alarm clock.
## Usage
- Open index.html with a browser (tested only on Edge)
- Wait for the components of the alarm clock to load
- Use the buttons on the left to customise the product

## Files
### Foldes
- `libs` contains the external libraries
- `models` contains the original model and some modified versions
- `icons` contains the icons for the buttons of the user interface
- `js` contains the js files (see below)
- `textures` contains the texture files in .jpg format. They are all 1024x1024

### Js files
- `globals.js` contains some global variables
- In `setting.js` the lights and the ground are defined
- In `materials.js` there is a function generating the materials. It also contains the definitions of the materials used
- In `objects.js` the components of the model are loaded, each with the appropriate material
- In `interaction.js` it is defined what happens when the buttons are pressed
