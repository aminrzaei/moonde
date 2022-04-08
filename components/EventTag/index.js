import adjuctColor from '../../utils/adjustColor';

const EventTag = ({ color, children }) => {
  return (
    <span
      style={{
        color,
        backgroundColor: adjuctColor(color, 120),
        borderRadius: '5px',
        padding: '1px 7px',
        fontSize: '13px',
        marginLeft: '5px',
      }}
    >
      {' '}
      {children}
    </span>
  );
};

export default EventTag;
