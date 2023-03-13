import { TailSpin } from 'react-loader-spinner';

function Loader(): JSX.Element {
  return (
    <div className='loader' style={{position: 'relative', top: '50%', left: '50%'}}>
      <span className="visually-hidden">Loader</span>
      <TailSpin
        height="1000"
        width="200"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible
      />
    </div>
  );
}

export default Loader;
