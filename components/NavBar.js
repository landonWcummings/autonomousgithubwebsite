// components/NavBar.js


import Link from 'next/link';


const NavBar = ({ repos }) => {
  return (
    <nav style={{
      display: 'flex',
      gap: '10px', // Space between boxes
      padding: '10px',
      borderBottom: '1px solid #ddd',
      justifyContent: 'center',
      flexWrap: 'wrap', // Allow items to wrap if they don't fit in one line
    }}>
      {repos.map((repo) => (
        <Link
          href={`/${repo.name}`}
          key={repo.id}
          style={{
            display: 'inline-block',
            width: '120px', // Fixed width
            height: '40px', // Fixed height
            backgroundColor: '#f4f4f4', // Light background
            textDecoration: 'none', // Remove underline
            color: '#333', // Text color
            borderRadius: '4px', // Rounded corners
            border: '1px solid #ccc', // Border for distinction
            textAlign: 'left', // Left-align text
            paddingLeft: '10px', // Add padding to separate text from border
            lineHeight: '40px', // Vertically center text within the box
            overflow: 'hidden', // Prevent text overflow
            whiteSpace: 'nowrap', // Prevent wrapping
            textOverflow: 'ellipsis', // Show ellipsis for long names
          }}
        >
          {repo.name}
        </Link>
      ))}
    </nav>
  );
};


export default NavBar;


