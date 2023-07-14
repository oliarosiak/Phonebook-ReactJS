import { ProgressBar } from 'react-loader-spinner';
import { LoaderBlock, LoaderText } from './Loader.styled';

const Loader = () => (
  <LoaderBlock>   
    <LoaderText>Wait a minute...</LoaderText>
    <ProgressBar
      height="25"
      width="60"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="var(--border-color)"
      barColor="var(--add-color)"
    />
  </LoaderBlock>
);

export default Loader;
