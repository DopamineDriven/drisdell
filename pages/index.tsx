import {NextPage} from 'next';
import cn from 'classnames';


const Index: NextPage = () => {
  return (
    <div className={cn('text-accents-3 mx-auto my-10 w-screen flex flex-row text-4xl justify-center min-w-full bg-primary-1 ')}>
      It do work
    </div>
  )
}

export default Index;