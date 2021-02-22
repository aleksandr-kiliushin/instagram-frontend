import React from 'react';
import './App.css'
import Post from './components/Post'

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagramLogo"
        />
      </div>
      <Post
        caption="hehe"
        imageUrl="https://www.jotform.com/blog/wp-content/uploads/2019/02/carles-rabada-635097-unsplash-compressor.jpg"
        username="oaiyui"
      />
      <Post
        caption="hello friends"
        imageUrl="https://aykhal.info/images/photos/db5329e1f9217988f05fd0db79343be7.jpg"
        username="msevenlight"
      />
      <Post
        caption="I am strong"
        imageUrl="https://i.insider.com/533b18ac6da811313ed906e7?width=700"
        username="stalone"
      />
    </div>
  );
}

export default App