import CreateUser from "../features/user/CreateUser.jsx";
import {useSelector} from "react-redux";
import MainTitle from "./header/MainTitle.jsx";
import Button from "./buttons/Button.jsx";

const style = {
    minHeight: '-webkit-fill-available'
}

function Home() {
    const {useName} = useSelector((store) => store.user.name);

    return (
      <div className='sm:my-16 my-10 mx-auto text-center
      px-4 py-auto'>
          <img className='min-h-screen absolute
          top-[125px] md:top-[81px]
          inset-0 z-1 w-screen object-cover opacity-20'
               src='/pizza.jpg' alt=''/>

          <div className='relative z-10 mx-auto'>
              <MainTitle/>
              {useName === '' ? (
                  <CreateUser />
              ) : (
                  <Button to='/menu'>
                      Menu &rarr;
                  </Button>
              )}
          </div>

{/*          <div className='relative inset-0 flex'>
              <div className='absolute z-3 bg-transparent'>
                  <MainTitle/>
                  {useName === '' ? (
                      <CreateUser />
                  ) : (
                      <Button to='/menu'>
                          Menu &rarr;
                      </Button>
                  )}
              </div>
              <img className=' absolute z-1 w-screen opacity-20' src='/pizza.jpg' alt=''/>*/}
      </div>
    );
}

export default Home;
