import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Playlist_Song } from './models/database/PlaylistSong.model';
import { PlaylistSongService } from './services/playlist-song.service';
import { PlaylistSongRepository } from './repository/playlist-song.repository';

@Module({
  imports: [SequelizeModule.forFeature([Playlist_Song])],
  providers: [PlaylistSongService, PlaylistSongRepository],
  exports: [PlaylistSongService],
})
export class PlaylistSongModule {}
