from django.core.management.base import BaseCommand
from ...models import User, Team, Activity, Leaderboard, Workout


class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        dc = Team.objects.create(name='DC')
        marvel = Team.objects.create(name='Marvel')

        # Create users
        User.objects.create(name='Superman', email='superman@dc.com', team=dc.name)
        User.objects.create(name='Batman', email='batman@dc.com', team=dc.name)
        User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc.name)
        User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel.name)
        User.objects.create(name='Captain America', email='cap@marvel.com', team=marvel.name)
        User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel.name)

        # Create activities
        Activity.objects.create(user='superman@dc.com', activity='Flight', duration=60)
        Activity.objects.create(user='batman@dc.com', activity='Martial Arts', duration=45)
        Activity.objects.create(user='ironman@marvel.com', activity='Engineering', duration=50)

        # Create leaderboard entries
        Leaderboard.objects.create(user='superman@dc.com', score=100)
        Leaderboard.objects.create(user='ironman@marvel.com', score=95)

        # Create workouts
        Workout.objects.create(name='Strength', description='Strength training workout')
        Workout.objects.create(name='Cardio', description='Cardio workout')

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
