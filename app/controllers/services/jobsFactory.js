(function () {
    var jobsFactory = function () {
        var jobs = [
            {
                id: 1,
                published: '2017-05-02',
                deadline: '2017-06-00',
                name:'Web developer', 
                city:'Zagreb',
                employer: 'Moj Posao',
                mainHashtags: [
                    {
                        inf = 1,
                    }
                ]
                secondHashtags: [
                    {
                        web = 1
                    }
                ]
            }, 
            {
                id: 2,
                published: '2016-11-22',
                deadline: '2017-02-00',
                name:'C++ developer', 
                city:'Rijeka',
                employer: 'Moj Posao',
                mainHashtags: [
                    {
                        inf = 1
                    }
                ]
                secondHashtags: [
                    {
                        c = 1,
                    }
                ]
            },
            {
                id: 3,
                published: '2017-01-02',
                deadline: '2017-03-00',
                name:'Farmer', 
                city:'Križevci',
                employer: 'Mlinar',
                mainHashtags: [
                    {
                        fiz = 1
                    }
                ]
                secondHashtags: [
                    {
                    }
                ]
            },
            {
                id: 4,
                published: '2016-05-02',
                deadline: '2017-06-00',
                name:'Metač pršuta na čelo', 
                city:'Split',
                employer: 'Kerum d.o.o',
                mainHashtags: [
                    {
                        fiz = 1
                    }
                ]
                secondHashtags: [
                    {
                    }
                ]
            },
            {
                id: 5,
                published: '2017-05-02',
                deadline: '2017-06-00',
                name:'Android developer', 
                city:'Zagreb',
                employer: 'Moj Posao',
                mainHashtags: [
                    {
                        inf = 1
                    }
                ]
                secondHashtags: [
                    {
                        java = 1,
                        android = 1
                    }
                ]
            }
        ];
        
        var factory = {};
        factory.getJobs = function() {
          return jobs;  
        };
        
        return factory;
    };
    angular.module('jobsApp').factory('jobsFactory', jobsFactory);
}());