import React from 'react';

function ToolbarHeader() {
  return (
    <div
      style={{
        paddingRight: 20,
        paddingTop: 0,
        textAlign: 'center',
        marginBottom: 10,
      }}
    >
      <h1
        style={{
          fontFamily: 'Cutive Mono, monospace',
          fontWeight: 100,
          marginBottom: 0,
          textAlign: 'center',
        }}
      >
        <span role="img" aria-label="curly page emoji">📃 </span>
        Build Resume
      </h1>
      <em
        style={{
          fontFamily: 'Cutive Mono, monospace',
          fontWeight: 100,
        }}
      >
        Modigy your resume!
      </em>
    </div>
  );
}

export default ToolbarHeader;
