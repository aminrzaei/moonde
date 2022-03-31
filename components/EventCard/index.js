const EventCard = () => {
  return (
    <div
      className="eventcard"
      style={{
        backgroundImage:
          'url("https://www.profootballhof.com/pfhof/media/Assets/NFLSchedule1050Web1.jpg?ext=.jpg")',
        backgroundSize: 'contain',
      }}
    >
      <div className="eventcard__detail">
        <span>دوشنبه، 21 مهر 1400</span>
        <span>
          <span>ساعت</span>
          <span>21:00</span>
        </span>
      </div>
      <div
        style={{
          textAlign: 'left',
          width: '100%',
          color: 'white',
          fontSize: '22px',
        }}
      >
        126 روز
      </div>
      <div
        style={{
          color: 'white',
          position: 'absolute',
          bottom: '3px',
          right: '12px',
          fontSize: '22px',
        }}
      >
        بازی فوتبال ایران-عراق
      </div>
    </div>
  );
};

export default EventCard;
