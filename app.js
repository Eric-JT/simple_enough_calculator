const Calculator = ( function() {

  const calculator_properties = new WeakMap();

  class Calculator {

    constructor( mainElement ) {
      calculator_properties.set( this, ( { curent_value: 0 } ) );
      this.mainElement = mainElement;
      /**
       * calculator_id is used to keep track of different calculators
       */
      calculator_properties.set( this, { calculator_id: Calculator.getNextId() } );
      this.createCalculator();
      calculator_properties.set( this, { buttons: this.grabButtons() } );
      this.addEventListeners();
    }
  
    static getNextId() {
      /**
       * Increment the calculator_id property. No input, this function is
       * run everytime a calculator is created. Returns a number.
       */
      return Calculator.next_id++;
    }

    get curent_value() {
      return calculator_properties.get( this ),curent_value;
    }

    set curent_value( value ) {
      calculator_properties.get( this ).curent_value = value;
    }

    get calculator_id() {
      return calculator_properties.get( this ).calculator_id;
    }

    get buttons() {
      return calculator_properties.get( this ).buttons;
    }

    add( value ) {
      if ( typeof value !== number )
        throw new Error( `Invalid input: ${value}` );
      curent_value += value;
    }
  
    subtract( value ) {
      if ( typeof value !== number )
        throw new Error( `Invalid input: ${value}` );
      curent_value -= value;
    }
  
    multiply( value ) {
      if ( typeof value !== number )
        throw new Error( `Invalid input: ${value}` );
      curent_value *= value;
    }
  
    divide() {
  
    }
  
    total() {
      console.log( 'total' );
    }

    grabButtons() {
      // Store all the elements with the class of 'key in KEYS
      return Array.from( document.querySelectorAll( `.btn[data-calculator-id=calculator_${this.calculator_id}]` ) );
      
      // for each key in KEYS listen for css 'transitionend', removeTransition
      // return buttons.forEach( button => button.addEventListener( 'click',  ));
    }

    addEventListeners() {
     for ( let button of this.buttons ) {
        if ( button.classList.contains('add') /* && button.dataset.calculator_id == `calculator_${this.calculator_id}` */ ) 
          //button.dataSet.addEventListener( 'click', this.total );
          console.log(this.calculator_id);
      };
    }
  
    createCalculator() {
      console.log( 'Creating calculator' );

      // Start of calculatorAreaMarkup
      let calculatorAreaMarkup = `<div class="app" data-calculator-id="calculator_${this.calculator_id}">`;

      // Start of results
      calculatorAreaMarkup += '<div class="results wrapper">';
      calculatorAreaMarkup += `<p class="result" data-calculator-id="calculator_${this.calculator_id}" >0</p>`;
      // End of results
      calculatorAreaMarkup += '</div>';

      // Start of numbers
      calculatorAreaMarkup += ' <div class="numbers wrapper"><ul>';
      for ( let i = 9; i >= 0; i-- )
        calculatorAreaMarkup += `<li class="btn number" data-calculator-id="calculator_${this.calculator_id}">${i}</li>`;
      // End of numbers
      calculatorAreaMarkup += '</ul></div>';

      // Start of operators
      calculatorAreaMarkup += '<div class="operators wrapper"><ul>';
      calculatorAreaMarkup += `
      <li class="btn add" data-calculator-id="calculator_${this.calculator_id}">+</li>
      <li class="btn subtract" data-calculator-id="calculator_${this.calculator_id}">-</li>
      <li class="btn multiply" data-calculator-id="calculator_${this.calculator_id}">*</li>
      <li class="btn divide" data-calculator-id="calculator_${this.calculator_id}">/</li>
      <li class="btn total" data-calculator-id="calculator_${this.calculator_id}">=</li>
    `;
      // End of operators
      calculatorAreaMarkup += '</ul></div>';

      // End of calculatorAreaMarkup
      calculatorAreaMarkup += '</div>'

      // Add the calculatorAreaMarkup to the screen
      this.mainElement.innerHTML += calculatorAreaMarkup;

      console.log( `Calculator created. css ID: calculator_${this.calculator_id}` );
    }
  
  }

  return Calculator;
} )();

const mainElement = document.querySelector( 'main' );

// Initial value for calculator_id
Calculator.next_id = 0;

// Create Calculators
//const calc0 = new Calculator( mainElement );


//create a Set instance
const calculator_list = new Set();

function newCalculator() {
  // add a user role
  calculator_list.add( new Calculator( mainElement ) );
}





document.querySelector('button').addEventListener('click', newCalculator);



console.log( calculator_list );



