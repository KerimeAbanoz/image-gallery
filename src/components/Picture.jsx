const Picture = (data) => {
  console.log("geliyor gelmekte olan:", data);
  const { photographer, src } = data;
  const { large } = src;
  return (
    <div className="main-div">
      <div className="pic-div">
        <img className="pic" src={large} alt="" />
      </div>
      <p className="artist">{photographer}</p>
    </div>
  );
};

export default Picture;
