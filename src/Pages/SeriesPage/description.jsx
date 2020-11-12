import propTypes from 'prop-types';
import styled from 'styled-components';

const TrailerButton = styled.button`
  border: 1px solid white;
  border-radius: 6px;
  font-family: uset;
  padding: 3px 13px;
  background-color: green;
  color: white;
  margin: 10px;
  font-size: 19px;
`;

const Thumbnail = styled.img`
  border-radius: 8px;
  width: 150px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const SeasonButton = styled.button`
  background: none;
  color: white;
  border: none;
  margin-left: 6px;

  &:active,
  &:focus {
    outline: none;
  }
`;
const Heading = styled.h1`
  margin: 0 0 10px 0;
`;

const Seasons = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 16px;
`;

//  const SeasonLabel = styled.mark`
//    background-color: green;
//    color: white;
//    margin-right: 6px;
//    border-radius: 5px;
//    border: 1px solid white;
//  `;

const ThumbnailWrapper = styled.div`
  justify-content: end;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeasonButtonWrapper = ({ idx, seasonNumber, onCurrentSeasonChange }) => {
  return (
    <SeasonButton
      style={{ color: seasonNumber === idx ? 'green' : 'white' }}
      onClick={() => {
        if (seasonNumber !== idx) {
          onCurrentSeasonChange(idx);
        }
      }}
    >
      {idx}
    </SeasonButton>
  );
};

const Description = ({
  name,
  seasonName,
  description,
  image,
  seasons,
  seasonNumber,
  onCurrentSeasonChange,
  ratings,
  episodes,
  yearOfRelease,
}) => {
  return (
    <DescriptionWrapper>
      <ThumbnailWrapper>
        <Thumbnail src={image} alt={name} />
        <TrailerButton>
          <i className="fa fa-play-circle"></i> Trailer
        </TrailerButton>
      </ThumbnailWrapper>
      <div className="p-2">
        <Heading>{`${name} (${seasonName})`}</Heading>
        <Seasons>
          Seasons:
          {seasons.map((season, i) => (
            <SeasonButtonWrapper
              key={i}
              seasonNumber={seasonNumber}
              onCurrentSeasonChange={onCurrentSeasonChange}
              idx={season.season_number}
            />
          ))}
        </Seasons>
        <p>Release Year: {yearOfRelease}</p>
        <p>Total number of episodes: {episodes}</p>
        <p>{ratings}</p>
        <p> {description} </p>
      </div>
    </DescriptionWrapper>
  );
};

Description.propTypes = {
  name: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  seasons: propTypes.array,
  seasonNumber: propTypes.number,
  onCurrentSeasonChange: propTypes.func,
  ratings: propTypes.number,
};

SeasonButtonWrapper.propTypes = {
  idx: propTypes.number,
  seasonNumber: propTypes.number,
  onCurrentSeasonChange: propTypes.func,
};

export default Description;
