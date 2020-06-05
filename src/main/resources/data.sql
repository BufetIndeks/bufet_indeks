insert into rola(opis, rola) values("To jest rola stolika, pozwala zamawiac jedzenie","ROLE_TABLE");
insert into rola(opis, rola) values("Administrator, moze robic wszystko w aplikacji","ROLE_ADMIN");
insert into rola(opis, rola) values("Pracownik przyjmuje zamowienia","ROLE_WORKER");

INSERT INTO kategoria_dania (nazwa)
VALUES ('Śniadania');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Zupy');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Dania mięsne');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Dodatki');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Dania barowe');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Kanapki');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Kawa');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Świeżo wyciskane soki');

INSERT INTO kategoria_dania (nazwa)
VALUES ('Napoje');
-----------------------------------------------------------------------------
INSERT INTO skladnik (skladnik)
VALUES ('Jajko');

INSERT INTO skladnik (skladnik)
VALUES ('Masło');

INSERT INTO skladnik (skladnik)
VALUES ('Pieczywo');

INSERT INTO skladnik (skladnik)
VALUES ('Szynka');

INSERT INTO skladnik (skladnik)
VALUES ('Cebula');

INSERT INTO skladnik (skladnik)
VALUES ('Pieczarka');

INSERT INTO skladnik (skladnik)
VALUES ('Pomidor');

INSERT INTO skladnik (skladnik)
VALUES ('Ser');

INSERT INTO skladnik (skladnik)
VALUES ('Ogórek');

INSERT INTO skladnik (skladnik)
VALUES ('Borowik');

INSERT INTO skladnik (skladnik)
VALUES ('Kiełbasa');

INSERT INTO skladnik (skladnik)
VALUES ('Papryka');

INSERT INTO skladnik (skladnik)
VALUES ('Czosnek');

INSERT INTO skladnik (skladnik)
VALUES ('Marchew');

INSERT INTO skladnik (skladnik)
VALUES ('Ziemniak');

INSERT INTO skladnik (skladnik)
VALUES ('Pietruszka');

INSERT INTO skladnik (skladnik)
VALUES ('Kotlet');

INSERT INTO skladnik (skladnik)
VALUES ('Polędwica');

INSERT INTO skladnik (skladnik)
VALUES ('Buraki');

INSERT INTO skladnik (skladnik)
VALUES ('Filet');

INSERT INTO skladnik (skladnik)
VALUES ('Wątróbka');

INSERT INTO skladnik (skladnik)
VALUES ('Żołądek drobiowy');

INSERT INTO skladnik (skladnik)
VALUES ('Ryż');

INSERT INTO skladnik (skladnik)
VALUES ('Kasza');

INSERT INTO skladnik (skladnik)
VALUES ('Dżem');

INSERT INTO skladnik (skladnik)
VALUES ('Kapusta');

INSERT INTO skladnik (skladnik)
VALUES ('Grzyby');

INSERT INTO skladnik (skladnik)
VALUES ('Szpinak');

INSERT INTO skladnik (skladnik)
VALUES ('Feta');

INSERT INTO skladnik (skladnik)
VALUES ('Salami');

INSERT INTO skladnik (skladnik)
VALUES ('Mleko');

INSERT INTO skladnik (skladnik)
VALUES ('Jabłko');

INSERT INTO skladnik (skladnik)
VALUES ('Gruszka');

INSERT INTO skladnik (skladnik)
VALUES ('Cytryna');

INSERT INTO skladnik (skladnik)
VALUES ('Pomarańcza');

INSERT INTO skladnik (skladnik)
VALUES ('Banan');

INSERT INTO skladnik (skladnik)
VALUES ('Kiwi');

INSERT INTO skladnik (skladnik)
VALUES ('Grejpfrut');

INSERT INTO skladnik (skladnik)
VALUES ('Ananas');

INSERT INTO skladnik (skladnik)
VALUES ('Herbata');

INSERT INTO skladnik (skladnik)
VALUES ('Mąka');

INSERT INTO skladnik (skladnik)
VALUES ('Woda');

INSERT INTO skladnik (skladnik)
VALUES ('Sól');
-----------------------------------------------------------------------------
INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Jajecznica na maśle z pieczywem',6.50,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Jajecznica z szynką. cebulką i z pieczywem',8.50,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Jajecznica z pieczarkami, cebulką, pomidorem ja pieczywem',10.50 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Tosty z szynką i serem (2 szt.)',7,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Ogórkowa',5,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('żurek z borowikami i kiełbasą',9,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Bogracz',10,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Kotlet schabowy panierowany',11,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Bitki z polędwicy z sosem',12,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Bitki z polędwicy, kluski śląskie, buraczki',16,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Szaszłyk z surówką',12,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Szaszłyk z ziemniakami i surówką',15,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Polędwica wieprzowa z rusztu i ziemniaki opiekane i surówka',16,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Polędwica wieprzowa z surówką',12,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Filet gyros z pieczarkami i surówką',13,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Nagetssy z surówką',12,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Nagetssy z frytkami i surówką',15,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Placki ziemniaczane po węgiersku',18,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Wątróbka drobiowa po cygańsku z surówką',11,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Żołądki drobiowe z pieczarkami i surówką',11.90,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Filet drobiowy panierowany z bukietem surówek',12,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Frytki',6,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Ryż z kaszą',5,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Kluski śląskie',5,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Ziemniaki z masłem',4 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Ziemniaki opiekane',5 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Buraczki zasmażane',5 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Surówka',5,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Zestaw surówek',6,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Naleśniki z serem',7.50,'To danie jest pyszne', 0, 0);


INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Naleśniki z dżemem',6.50,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Pierogi ruskie',10,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Pierogi z kapustą i grzybami',10,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Pierogi z mięsem',12,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Naleśniki ze szplnakiem, fetą, suszonymi pomidorami i surówką',10,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Kanapka z szynką',4.90,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Kanapka z salami',4.90,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Kanapka wegetariańska',4.90,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Espresso',4 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('2x espresso',6 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Czarna mala',6 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Czarna duza',8 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Biała mala',6 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Biała duza',9 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Capuccino mala',6 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Capuccino duza',9 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Latte male',7 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Latte duze',10 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Czekolada male',7,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Czekolada duze',9,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Mokka male',8,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Mokka duze',10,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Jabłko, gruszka, cytryna',8,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Pietruszka, pomarańcza, jabłko, cytryna ',8,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Banan, marchew, jabłko. cYtrYna',8,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Pomarańcza, jabłko, kiwi, cytryna',8,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Pomarańcza, grejpfrut, ananas',8,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Coca cola. Fanta, Sprite, Fuze tea (250 ml)',3.50 ,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Sok Cappy',4,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Woda mineralna',3,'To danie jest pyszne', 0, 0);

INSERT INTO danie(nazwa,cena,opis,danie_dnia,usuniety)
VALUES('Herbata',3,'To danie jest pyszne', 0, 0);
-----------------------------------------------------------------------------
INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(1,1);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(2,1);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(3,1);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(4,1);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(5,2);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(6,2);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(7,2);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(8,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(9,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(10,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(11,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(12,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(13,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(14,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(15,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(16,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(17,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(18,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(19,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(20,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(21,3);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(22,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(23,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(24,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(25,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(26,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(27,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(28,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(29,4);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(30,5);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(31,5);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(32,5);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(33,5);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(34,5);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(35,5);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(36,6);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(37,6);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(38,6);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(39,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(40,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(41,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(42,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(43,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(44,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(45,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(46,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(47,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(48,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(49,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(50,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(51,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(52,7);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(53,8);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(54,8);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(55,8);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(56,8);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(57,8);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(58,9);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(59,9);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(60,9);

INSERT INTO danie_kategoria(danie_id, kategoria_dania_id)
VALUES(61,9);
-----------------------------------------------------------------------------
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(1,1);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(1,2);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(1,3);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(2,1);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(2,4);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(2,5);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(2,3);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(3,1);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(3,6);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(3,5);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(3,7);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(3,3);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(4,3);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(4,4);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(4,8);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(5,9);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(5,42);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(6,10);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(6,11);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(6,42);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(7,5);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(7,12);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(7,7);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(7,13);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(7,14);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(7,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(7,16);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(8,17);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(9,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(10,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(10,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(10,19);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(11,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(12,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(12,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(13,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(13,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(14,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(15,20);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(15,6);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(16,20);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(17,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(17,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(18,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(19,21);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(20,22);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(20,6);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(21,20);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(22,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(23,23);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(23,24);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(24,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(25,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(25,2);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(26,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(27,19);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(28,26);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(29,26);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(30,41);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(30,42);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(30,43);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(30,8);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(31,41);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(31,42);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(31,43);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(31,25);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(32,15);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(33,26);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(33,27);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(34,18);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(35,29);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(35,7);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(35,28);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(35,41);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(35,42);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(35,43);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(36,3);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(37,3);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(38,3);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(53,32);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(53,33);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(53,34);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(54,16);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(54,32);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(54,35);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(54,34);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(55,32);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(55,34);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(55,36);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(55,14);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(56,32);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(56,35);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(56,34);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(56,37);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(57,35);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(57,38);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(57,39);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(60,42);
INSERT INTO danie_skladnik(danie_id, skladnik_id) VALUES(61,40);

INSERT INTO status(status_id, status) VALUES (1, "Oczekujące");
INSERT INTO status(status_id, status) VALUES (2, "Realizowane");
INSERT INTO status(status_id, status) VALUES (3, "Gotowe");
INSERT INTO status(status_id, status) VALUES (4, "Zakończone");