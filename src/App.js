const user1 = {
  name: 'Mark Webber',
  action: 'reacted to your recent post',
  post: 'My first tournament today!',
  time: '1m ago',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  unread: true,
}

function Header() {
  return (
    <>
        <div class="flex justify-between">
          <div class="flex">
            <h1 class="font-bold text-xl ">
              Notifications
            </h1>
          <p class="bg-blue text-gray-blue-1 px-3 py-1 rounded-lg ml-2 ">3</p>
          </div>
          <button class="text-gray-blue-5">Mark all as read</button>
        </div>
    </>
  );
}

function Notification() {
  return (
      <>
      <div class="flex gap-3 bg-gray-blue-1 p-4 rounded-lg mb-4">
        <img
          className="rounded-full w-12 h-12"
          src={user1.imageUrl}
          alt={'Photo of ' + user1.name}
        />
        <div>
          <p class="text-gray-blue-5">
            <span class="font-bold text-gray-blue-6">{user1.name}</span> 
            &nbsp;{user1.action}&nbsp;
            <span class="text-gray-blue-5 font-bold">{user1.post}</span>
            {user1.unread? (<div className="inline-flex bg-red p-1 w-2 rounded-full ml-2"></div>) : (<></>)}
          </p>
          <p class="text-gray-blue-4">{user1.time}</p>
        </div>

      </div>
    </>
  );
}

{/* 
  Angela Gray followed you
  5m ago

  Jacob Thompson has joined your group Chess Club
  1 day ago

  Rizky Hasanuddin sent you a private message
  5 days ago
  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.

  Kimberly Smith commented on your picture
  1 week ago

  Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
  2 weeks ago

  Anna Kim left the group Chess Club
  2 weeks ago
*/}
function NotificationList() {
  const users = [
    { 
      name: 'Mark Webber', 
      unread: true, 
      id: 1,
      action: 'reacted to your recent post',
      post: 'My first tournament today!',
      time: '1m ago',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    },
    { name: 'Angela Gray', unread: false, id: 1 },
  ];
  const listItems = users.map(user =>
    <li key={user.id} >
      <Notification />
    </li>
  );

  return (
    <ul className=" mt-4">{listItems}</ul>
  );
}

function App() {
  return (
    <div className="bg-gray-blue-1 h-screen sm:pt-16">
      <div className="bg-[color:white] p-5 mx-auto sm:max-w-[630px] shadow-md rounded-lg">
        <Header />

        <NotificationList />

      </div>
    </div>
  );
}

export default App;
