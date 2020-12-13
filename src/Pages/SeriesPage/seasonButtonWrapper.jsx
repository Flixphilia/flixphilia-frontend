import Button from '@material-ui/core/Button';
import useLocalStorage from '../../hooks/useLocalStorage';

const SeasonButtonWrapper = ({ seasonNumber, onCurrentSeasonChange }) => {
  const [currentSeason] = useLocalStorage('currentSeason', seasonNumber);

  return (
    <Button
      style={{ color: seasonNumber === currentSeason ? 'green' : 'white' }}
      onClick={() => onCurrentSeasonChange(seasonNumber)}
    >
      {seasonNumber}
    </Button>
  );
};

export default SeasonButtonWrapper;
