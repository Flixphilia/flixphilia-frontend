import Button from '@material-ui/core/Button';
import { useStateValue } from '../../context/StateProvider';

const SeasonButtonWrapper = ({ seasonNumber, onCurrentSeasonChange }) => {
  const [{ currentSeason }] = useStateValue();

  return (
    <Button
      style={{ color: seasonNumber === currentSeason ? 'green' : 'white' }}
      onClick={() => {
        if (seasonNumber !== currentSeason) {
          onCurrentSeasonChange(seasonNumber);
        }
      }}
    >
      {seasonNumber}
    </Button>
  );
};

export default SeasonButtonWrapper;
