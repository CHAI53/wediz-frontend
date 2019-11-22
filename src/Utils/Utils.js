export const changeValue = e => {
  this.setState({
    key: e.target.value
  });
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("VALID_TOKEN") !== null;
};
