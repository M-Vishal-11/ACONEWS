const Newsfeed = ({article}) => {
    return (
      <div className="mr-10 ml-10 mt-4 flex flex-col">
          <a href={article.url}>
              {article.image && article.description ? (
                <img src={article.image} alt={article.description} className="w-28 h-28" />
              ) : (
                <h1>no image</h1>
              )}
              {article.title ? (
                <h2 className="overflow-hidden mt-2 text-ellipsis w-28 md:w-48">{article.title}</h2>
              ) : (
                <h2>loading</h2>
              )}
              {article.publishedAt ? (
                <p className="text-left text-slate-500 font-light">{article.publishedAt}</p>
              ) : (
                <h1>no date</h1>
              )}
          </a>
      </div>
    );
  }
  
  export default Newsfeed;