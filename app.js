class App extends React.Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleReset = () => {
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          placeholder="type in"
        />
        <button onClick={this.handleReset}>Reset</button>
        <h1 className="title">{this.state.value}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
