import React from 'react';
import './board.css';

const BOARD = [
  { name: 'Ayush',   grade: 12, outdoorActivity: '' },
  { name: 'Andrew',  grade: 12, outdoorActivity: '' },
  { name: 'Kruthik', grade: 12, outdoorActivity: '' },
  { name: 'Sana',    grade: 11, outdoorActivity: '' },
  { name: 'Aarav',   grade: 10, outdoorActivity: '' },
];

const Board = () => (
  <section className="board-section">
    <div className="board-header">
      <h2 className="board-section-title">Our Board</h2>
    </div>
    <div className="board-scroll-track">
      {BOARD.map(({ name, grade, outdoorActivity, photo }) => (
        <div key={name} className="board-member-card">
          <div className="board-member-photo">
            {photo
              ? <img src={photo} alt={name} />
              : <span className="board-member-initials">{name[0]}</span>
            }
          </div>
          <div className="board-member-info">
            <div className="board-member-name-row">
              <span className="board-member-name">{name}</span>
              <span className="board-member-arrow">↗</span>
            </div>
            <p className="board-member-grade">Grade {grade}</p>
            {outdoorActivity && (
              <p className="board-member-activity">{outdoorActivity}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Board;
