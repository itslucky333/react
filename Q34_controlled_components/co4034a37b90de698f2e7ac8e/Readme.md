### we are learning about controlled components
In HTML labels like placeholder/Input maintains its own state, Those state depends upon the user input. When we use State in React it creates multiple state so, there can arise conflict between HTML state and React state.   
We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

  
   value={formData.firstName} this line in our above code solve the issues of controlled component.
   
    
    https://reactjs.org/docs/forms.html