import { styled } from "styled-components";
import { ReactComponent as PlayIcon } from "assets/play.svg";
import { ReactComponent as SkipIcon } from "assets/skip.svg";
import { ReactComponent as PauseIcon } from "assets/pause.svg";
import { ReactComponent as VolumeIcon } from "assets/volume.svg";
import { ReactComponent as MusicIcon } from "assets/music.svg";
import { ReactComponent as ChevronIcon } from "assets/chevron.svg";
import { ReactComponent as HeartIcon } from "assets/heart.svg";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import { ReactComponent as Logo } from "assets/logo.svg";

const Play = styled(PlayIcon)`
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.color || "white"};
`;

const SkipLeft = styled(SkipIcon)`
  fill: ${(props) => props.color || "white"};
`;
const SkipRight = styled(SkipLeft)`
  transform: rotate(180deg);
`;
const Pause = styled(PauseIcon)`
  fill: ${(props) => props.color || "white"};
`;
const Volume = styled(VolumeIcon)`
  fill: ${(props) => props.color};
`;
const Music = styled(MusicIcon)`
  fill: ${(props) => props.color};
`;
const ChevronLeft = styled(ChevronIcon)`
  fill: ${(props) => props.color};
  stroke: ${(props) => props.color || "white"};
`;
const ChevronRight = styled(ChevronLeft)`
  stroke: ${(props) => props.color};
  transform: rotate(180deg);
`;
const Heart = styled(HeartIcon)`
  fill: ${(props) => props.color};
`;
const Search = styled(SearchIcon)`
  stroke: ${(props) => props.color || "white"};
`;
export {
  Play,
  SkipLeft,
  SkipRight,
  Pause,
  Volume,
  Music,
  ChevronLeft,
  ChevronRight,
  Heart,
  Search,
  Logo,
};
