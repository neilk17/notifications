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

function Notification({ person, post }) {
  return (
      <>
      <div className={`flex gap-3 ${post.isNew === true ? 'bg-gray-blue-1' : ''} p-4 rounded-lg mb-4`}>
        <img
          className="rounded-full w-12 h-12 hover:cursor-pointer"
          src={person.imageUrl}
          alt={'Photo of ' + person.name}
        />
        <div>
          <p class="text-gray-blue-5">
            <span class="font-bold text-gray-blue-6 hover:cursor-pointer hover:text-blue">{person.name}</span> 
            &nbsp;{post.action}&nbsp;
            { 
              post.type === 'message' ? 
              (<div class="mt-2 border-2 border-gray-blue-2 hover:cursor-pointer hover:bg-gray-blue-2 rounded-md p-3">{post.title}</div> )
              : 
              (<span class="text-gray-blue-5 font-bold hover:cursor-pointer hover:text-blue">{post.title}</span> )
            }
            {post.isNew && <div className="inline-flex bg-red p-1 w-2 rounded-full ml-2" />}
          </p>
          <p class="text-gray-blue-4">{post.time}</p>
        </div>

      </div>
    </>
  );
}

function NotificationList() {
  const users = [
    { 
      name: 'Mark Webber', 
      isNew: true, 
      id: 1,
      action: 'reacted to your recent post',
      title: 'My first tournament today!',
      time: '1m ago',
      imageUrl: '/images/avatar-mark-webber.webp',
    },
    { 
      name: 'Angela Gray', 
      isNew: true, 
      id: 2,
      action: 'followed you',
      time: '3m ago',
      imageUrl: '/images/avatar-angela-gray.webp',
    },
    { 
      name: 'Jacob Thompson', 
      isNew: true, 
      id: 3,
      action: 'has joined your group',
      title: 'Chess Club',
      time: '1 day ago',
      imageUrl: '/images/avatar-jacob-thompson.webp',
    },
    {
      name: 'Rizky Hasanuddin ',
      isNew: false,
      id: 4,
      type: 'message',
      action: 'sent you a private message',
      title: 'Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.',
      time: '5 days ago', 
      imageUrl: '/images/avatar-rizky-hasanuddin.webp',
    },
    {
      name: 'Kimberly Smith ',
      isNew: false,
      id: 5,
      type: 'picture',
      action: 'commented on your picture',
      title: '',
      time: '1 week ago', 
      imageUrl: '/images/avatar-kimberly-smith.webp',
    },
    {
      name: 'Nathan Peterson ',
      isNew: false,
      id: 6,
      action: 'reacted to your recent post',
      title: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago', 
      imageUrl: '/images/avatar-nathan-peterson.webp',
    },
    {
      name: 'Anna Kim ',
      isNew: false,
      id: 7,
      action: 'left the group ',
      title: 'Chess Club',
      time: '2 weeks ago', 
      imageUrl: '/images/avatar-anna-kim.webp',
    }
  ];
  const listItems = users.map(user =>
    <li key={user.id} >
      <Notification 
        person={{ 
          name: user.name, 
          imageUrl: user.imageUrl 
          }}
        post={
          { 
            isNew: user.isNew, 
            action: user.action, 
            type: user.type,
            time: user.time,
            title: user.title,
          }}
      />
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
