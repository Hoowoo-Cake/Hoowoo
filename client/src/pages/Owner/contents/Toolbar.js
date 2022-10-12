import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Toolbar(props) {
    const {
      date,
    } = props;
  
    const navigate = (action) => {
      props.onNavigate(action);
    };
  
    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button
            type="button"
            onClick={navigate.bind(null, 'PREV')}
            style={{border: "none"}}
          >
            <FontAwesomeIcon icon={ faCircleChevronLeft} className="fs-5 text-dark" />
          </button>
          <span className="rbc-toolbar-label">{`${date.getFullYear()}년 ${date.getMonth() + 1}월`}</span>
          <button
            type="button"
            onClick={navigate.bind(null, 'NEXT')}
            style={{border: "none"}}
          >
            <FontAwesomeIcon icon={ faCircleChevronRight} className="fs-5 text-dark" />
          </button>
        </span>
      </div>
    );
  }