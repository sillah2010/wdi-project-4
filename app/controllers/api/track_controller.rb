class Api::TrackController < ApplicationController
    def index
        @tracks = Playlist.find(params[:playlist_id]).tracks
        render json: @tracks
      end
    
      def create
        @track = Track.create!(user_params)
        render json: @track
      end
    
      def show
        @track = Track.find(params[:id])
        render json: @track
      end
    
      def update
        @track = Track.find(params[:id])
        @track.update!(user_params)
        render json: @track
      end
    
      def destroy
        @track = Track.find(params[:id]).delete
        render status: :ok
      end
    
      private
    
      def track_params
        params.require(:user).permit(:title, :album, :total_playtime, :release_year)
      end
end
