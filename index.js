const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-container">
    <div>
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button className="yellow-button" buttonText="Like" />
        <Button className="white-button" buttonText="comment" />
        <Button className="blue-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
