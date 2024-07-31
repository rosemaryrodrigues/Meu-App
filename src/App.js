///Projeto Biscoito da sorte
import React, {Component} from "react";
import './estilo.css'

class App extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      textoFrase:''
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases =['A vida trará coisas boas se tiveres paciência.','A maior de todas as torres começa no solo.','Não compense na ira o que lhe falta na razão.','	Siga os bons e aprenda com eles.']
  }
  quebraBiscoito(){
    let state =this.state;
    let numeroAleatorio = Math.floor(Math.random()* this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);

  }
  
  render(){
    return(
      <div className="container">  
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
        
      </div>
    );
  }
}
class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>Abrir Biscoito</button>
      </div>

    );
  }
}
export  default App;
