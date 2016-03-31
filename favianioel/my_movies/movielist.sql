-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 31, 2016 at 07:01 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `movielist`
--

-- --------------------------------------------------------

--
-- Table structure for table `actors`
--

CREATE TABLE IF NOT EXISTS `actors` (
  `actorID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`actorID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `actors`
--

INSERT INTO `actors` (`actorID`, `name`, `image`) VALUES
(1, 'Marlon Brando', 'images/actors/godfather/marlonbrado.jpg'),
(2, 'Al Pacino', 'images/actors/godfather/alpacino.jpg'),
(3, 'James Caan', 'images/actors/godfather/jamescaan.jpg'),
(4, 'Tim Roth', 'images/actors/pulp/timroth.jpg'),
(5, 'John Travolta', 'images/actors/pulp/johntravolta.jpg'),
(6, 'Samuel L. Jackson', 'images/actors/pulp/jackson.jpg'),
(7, 'Roberto Benigni', 'images/actors/life/roberto.jpg'),
(8, 'Nicoletta Braschi', 'images/actors/life/nicoleta.jpg'),
(9, 'Giorgio Cantarini', 'images/actors/life/giorgio.jpg'),
(10, 'Roberto De Niro', 'images/actors/goodfellas/niro.jpg'),
(11, 'Ray Liotta', 'images/actors/goodfellas/ray.jpg'),
(12, 'Joe Pesci', 'images/actors/goodfellas/joe.jpg'),
(13, 'Tim Robbins', 'images/actors/redemption/tim.jpg'),
(14, 'Morgan Freeman', 'images/actors/redemption/morgan.jpg'),
(15, 'Bob Gunton', 'images/actors/redemption/bob.jpg'),
(16, 'Christian Bale', 'images/actors/batman/bale.jpg'),
(17, 'Health Ledger', 'images/actors/batman/joker.jpg'),
(18, 'Aaron Eckhart', 'images/actors/batman/aaron.jpg'),
(19, 'Martin Balsam', 'images/actors/angry/martin.jpg'),
(20, 'John Fiedler', 'images/actors/angry/john.jpg'),
(21, 'Lee J. Cobb', 'images/actors/angry/cobb.jpg'),
(22, 'Liam Neeson', 'images/actors/list/liam.jpg'),
(23, 'Ben Kingsley', 'images/actors/list/ben.jpg'),
(24, 'Ralph Fiennes', 'images/actors/list/ralph.jpg'),
(25, 'Edward Norton', 'images/actors/fightclub/norton.jpg'),
(26, 'Brad Pitt', 'images/actors/fightclub/pitt.jpg'),
(27, 'Helena Bonham Carter', 'images/actors/fightclub/helena.jpg'),
(28, 'Mark Hamill', 'images/actors/starwars/mark.jpg'),
(29, 'Harrison Ford', 'images/actors/starwars/ford.jpg'),
(30, 'Carrie Fisher', 'images/actors/starwars/carrie.jpg'),
(31, 'Leonardo DiCaprio', 'images/actors/inception/leonardo.jpg'),
(32, 'Joseph Gordon-Levitt', 'images/actors/inception/levit.jpg'),
(33, 'Ellen Page', 'images/actors/inception/page.jpg'),
(34, 'Jamie Foxx', 'images/actors/django/jamiefoxx.jpg'),
(35, 'Christoph Waltz', 'images/actors/django/waltz.jpg'),
(36, 'Guy Pearce', 'images/actors/memento/guypearce.jpg'),
(37, 'Carrie-Anne Moss', 'images/actors/memento/moss.jpg'),
(38, 'Joe Pantoliano', 'images/actors/memento/joe.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE IF NOT EXISTS `genres` (
  `genreID` int(11) NOT NULL AUTO_INCREMENT,
  `genre` varchar(20) NOT NULL,
  PRIMARY KEY (`genreID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`genreID`, `genre`) VALUES
(1, 'Crime'),
(2, 'Drama'),
(3, 'Comedy'),
(4, 'Romance'),
(5, 'Adventure'),
(6, 'Thriller'),
(7, 'Biography'),
(8, 'Actiune'),
(9, 'History'),
(10, 'Fantasy'),
(11, 'Mystery'),
(12, 'Sci-Fi'),
(13, 'Western');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `movieID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `year` varchar(4) DEFAULT NULL,
  `poster` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`movieID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movieID`, `title`, `year`, `poster`) VALUES
(1, 'The Godfather', '1972', 'images/movies/godfather.jpg'),
(3, 'Pulp fiction', '1994', 'images/movies/pulpfiction.jpg'),
(4, 'Life is beautiful', '1997', 'images/movies/life.jpg'),
(5, 'Goodfellas', '1990', 'images/movies/goodfellas.jpg'),
(6, 'The Shawshank Redemption', '1994', 'images/movies/theshawshankredemption.jpg'),
(7, 'The Dark Knight', '2008', 'images/movies/thedarkknight.jpg'),
(8, '12 Angry Men', '1957', 'images/movies/angrymen.jpg'),
(9, 'Schindler''s List', '1993', 'images/movies/schindlerslist.jpg'),
(10, 'Fight Club', '1999', 'images/movies/fightclub.jpg'),
(11, 'Star Wars: Episode V - The Empire Strikes Back', '1980', 'images/movies/starwarsv.jpg'),
(12, 'Inception', '2010', 'images/movies/inception.jpg'),
(13, 'Django Unchained', '2012', 'images/movies/django.jpg'),
(14, 'Memento', '2000', 'images/movies/memento.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `movie_actors`
--

CREATE TABLE IF NOT EXISTS `movie_actors` (
  `movieID` int(11) NOT NULL,
  `actorID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie_actors`
--

INSERT INTO `movie_actors` (`movieID`, `actorID`) VALUES
(1, 1),
(1, 2),
(1, 3),
(3, 4),
(3, 5),
(3, 6),
(4, 7),
(4, 8),
(4, 9),
(5, 10),
(5, 11),
(5, 12),
(6, 13),
(6, 14),
(6, 15),
(7, 16),
(7, 17),
(7, 18),
(8, 19),
(8, 20),
(8, 21),
(9, 22),
(9, 23),
(9, 24),
(10, 25),
(10, 26),
(10, 27),
(11, 28),
(11, 29),
(11, 30),
(12, 31),
(12, 32),
(12, 33),
(13, 34),
(13, 35),
(13, 31),
(14, 36),
(14, 37),
(14, 38);

-- --------------------------------------------------------

--
-- Table structure for table `movie_genres`
--

CREATE TABLE IF NOT EXISTS `movie_genres` (
  `movieID` int(11) NOT NULL,
  `genreID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie_genres`
--

INSERT INTO `movie_genres` (`movieID`, `genreID`) VALUES
(1, 1),
(1, 2),
(3, 1),
(3, 2),
(4, 3),
(4, 2),
(4, 4),
(5, 1),
(5, 2),
(5, 7),
(6, 1),
(6, 2),
(7, 1),
(7, 2),
(7, 8),
(8, 1),
(8, 2),
(9, 7),
(9, 2),
(9, 9),
(10, 2),
(11, 8),
(11, 10),
(11, 6),
(12, 8),
(12, 11),
(12, 12),
(13, 13),
(14, 11),
(14, 6);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
