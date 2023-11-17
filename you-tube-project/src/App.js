import './App.css';

const videos = [
  {
    id: 1,
    title: "homely cooking with your family, enjoy best experience",
    thumbnailUrl: "https://assets.materialup.com/uploads/60d04315-3cff-4756-ad88-0dc72b839299/preview.jpg",
    likes: 1500,
    views: 25000,
    channelName: "king of cooking",
    channelLogoUrl: "https://i.ytimg.com/vi/cOunaOSG_lA/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "tips to driving the ball well then shine well",
    thumbnailUrl: "https://marketplace.canva.com/EAFkw4I2wzg/2/0/1600w/canva-red-and-white-football-sports-youtube-thumbnail-Baee7A1Fm5E.jpg",
    likes: 500,
    views: 2000,
    channelName: "sports tips",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Z70MSkTUBNXgEChcHwEYXB8ImODDl3Y7keMTvBq3pQ&s",
  },
  {
    id: 3,
    title: "learn how to become a graphic designer and focus on bright future",
    thumbnailUrl: "https://img.freepik.com/free-psd/creativity-template-design_23-2150671379.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 1800,
    views: 50000,
    channelName: "grapic gang",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEQAv6-DkSarLy1GVIFbQZ5SZpbIInRnPo4fSo1vOwwb0b-q4dBUCglE&usqp=CAU",
  },
  {
    id: 4,
    title: "songs with amazing background sound effect",
    thumbnailUrl: "https://img.freepik.com/free-vector/watercolor-hand-drawn-youtube-thumbnail_23-2149027552.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 500,
    views: 9000,
    channelName: "singing spaterns",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG7JWMIThosU5KcDbk-Uh2Xxt8OvPVIG66TBHx92c7vyR2Vt-YTq3AMpWs4yZwEsYf48&usqp=CAU",
  },
  {
    id: 5,
    title: "learn untold truth of world",
    thumbnailUrl: "https://img.freepik.com/free-psd/evangelist-religion-spirituality-youtube-cover-template_23-2149571172.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 1700,
    views: 25000,
    channelName: "truth stories",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzklaMOaRWBmtnWeDP8vMsN3myyhfy9N0eETWfOgv6PnSI2AG78VfYivHtcWiLqR62Glg&usqp=CAU",
  },
  {
    id: 6,
    title: "build your business ideas with us support",
    thumbnailUrl: "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail-template_23-2148913303.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 51500,
    views: 925000,
    channelName: "passion king",
    channelLogoUrl: "https://img.freepik.com/free-psd/flat-design-business-template_23-2149951999.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
  },
  {
    id: 7,
    title: "experience your new planet with new atmosphere",
    thumbnailUrl: "https://img.freepik.com/free-psd/youtube-cover-template-world-environment-day-celebration_23-2150373382.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 30000,
    views: 200000,
    channelName: "new planet",
    channelLogoUrl: "https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=360&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 360w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=740&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 740w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=826&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 826w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=900&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 900w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=996&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 996w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=1060&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 1060w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=1380&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 1380w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=1480&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 1480w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=1800&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 1800w, https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?w=2000&t=st=1700156160~exp=1700156760~hmac=0e6709840507e5f3d4eb87ef297af5b6fa847bcbe6bca9ef142ec88fac11fe98 2000w",
  },
  {
    id: 8,
    title: "maintain your fitness-feel freshness-maintain your health",
    thumbnailUrl: "https://img.freepik.com/free-psd/flat-design-fitness-gym-template_23-2149553767.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 15440,
    views: 236889,
    channelName: "fit body",
    channelLogoUrl: "https://img.freepik.com/free-psd/sport-class-banner-template_23-2149081112.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
  },
  {
    id: 9,
    title: "we are giving best ideas to buy your future cars",
    thumbnailUrl: "https://img.freepik.com/free-vector/gradient-car-rental-youtube-thumbnail_23-2149228176.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 1579,
    views: 25500,
    channelName: "car cons",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4saB-4pVTO7aD25_cssy3WBT-__zXCLFbw&usqp=CAU",
  },
  {
    id: 10,
    title: "invest in market carefully after watching this vedio-maybe it's change your life",
    thumbnailUrl: "https://img.freepik.com/premium-psd/youtube-thumbnail-web-banner-template-digital-marketing-live_539075-160.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 100,
    views: 2000,
    channelName: "grow more",
    channelLogoUrl: "https://www.livemint.com/lm-img/img/2023/10/01/1600x900/Sectoral_Index_change_1696146869322_1696146869610.jpg",
  },
  {
    id: 11,
    title: "enjoy your one and only life with visiting new places-feel that silent",
    thumbnailUrl: "https://img.freepik.com/free-psd/youtube-cover-template-world-tourism-day_23-2149533209.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 10,
    views: 20,
    channelName: "visit boys",
    channelLogoUrl: "https://www.scu.edu/media/ethics-center/big-q/smile-360x237.jpg",
  },
  {
    id: 12,
    title: "know our world wide techonology step by step",
    thumbnailUrl: "https://img.freepik.com/free-vector/flat-minimal-technology-youtube-thumbnail_23-2149027884.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 15880,
    views: 259900,
    channelName: "tech guru",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKb525WeeBm9yNyUSDqmbV8aSqV2ZWDBi1i-A1wk_-OC0xruulv0a93pWYNK01UmBdYc0&usqp=CAU",
  },
  {
    id: 13,
    title: "we are updating offers of shopping flatforms-follow our channel take extra benefits",
    thumbnailUrl: "https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148973946.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 150,
    views: 2500,
    channelName: "offer zone",
    channelLogoUrl: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    title: "think one time-you are wellwisher of earth,  give your best for our planet ",
    thumbnailUrl: "https://img.freepik.com/free-psd/flat-design-renewable-energy-template_23-2150516094.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 1549,
    views: 25999,
    channelName: "wellfare",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXHt0qrnA0RwCBGmAh1x2idFDhyU0TZYiUCgskK-u&s",
  },
  {
    id: 15,
    title: "know interesting factors about world's top 10 beaches",
    thumbnailUrl: "https://img.freepik.com/free-vector/flat-design-travel-youtube-thumbnail_23-2149170183.jpg?size=626&ext=jpg&ga=GA1.1.1838467211.1700067158&semt=ais",
    likes: 9999,
    views: 20000,
    channelName: "beach ride",
    channelLogoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC7ThPLGm5JOwc6v03Ulmw-t_DbvX5CGV6w&usqp=CAU",
  }
];

const VideoGallery = ({ videos }) => {
  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <div className='vedio-flex'>
          <img src={video.thumbnailUrl} alt={video.title} className="thumbnail" />
          <div className="channel-info">
            <img src={video.channelLogoUrl} alt={video.channelName} className="channel-logo" />
            <span className="channel-name">{video.channelName}</span>
          </div>
          </div>
          <div className="video-info">
            <div className="video-title">{video.title}</div>
            <div className="engagement-info">
              <span className="likes">{`${video.likes} likes`}</span>
              <span className="views">{`${video.views} views`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


function App() {
  return (
    <div>
      <h1>Video Gallery</h1>
      <VideoGallery videos={videos} />
    </div>
  );
}

export default App;
