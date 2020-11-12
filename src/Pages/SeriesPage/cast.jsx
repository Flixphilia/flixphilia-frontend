import propTypes from 'prop-types';
import styled from 'styled-components';

const CastCardWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 8px;
  border-color: green;
  min-width: fit-content;
  margin: 8px;
`;

const CastCard = ({ name, character, image }) => {
  return (
    <CastCardWrapper>
      <h4>{character}</h4>
      {image !== 'null' ? (
        <img src={image} alt={name} height="140px" width="100px" />
      ) : (
        <div
          height="140px"
          width="100px"
          style={{ borderColor: 'white', borderRadius: '2px' }}
        >
          No Image
        </div>
      )}
      <h4>{name}</h4>
    </CastCardWrapper>
  );
};

const CastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  overflow-x: scroll;
`;

const Cast = ({ cast }) => {
  return (
    <CastWrapper>
      {cast.map((each, i) => (
        <CastCard
          key={i}
          name={each.name}
          character={each.character}
          image={each.image}
        />
      ))}
    </CastWrapper>
  );
};

export default Cast;

Cast.propTypes = {
  cast: propTypes.array,
};

CastCard.propTypes = {
  name: propTypes.string,
  character: propTypes.string,
  image: propTypes.string,
};
